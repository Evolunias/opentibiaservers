import CurrentMadnessaliveOnlineKeywordPage, { generateMetadata } from './current-madnessalive-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMadnessaliveOnlineKeywordPage />;
}
