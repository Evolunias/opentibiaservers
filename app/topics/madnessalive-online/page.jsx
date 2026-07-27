import MadnessaliveOnlineKeywordPage, { generateMetadata } from './madnessalive-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveOnlineKeywordPage />;
}
