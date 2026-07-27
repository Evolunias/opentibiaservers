import CurrentElderaOnlineKeywordPage, { generateMetadata } from './current-eldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentElderaOnlineKeywordPage />;
}
