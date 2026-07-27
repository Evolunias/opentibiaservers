import JameraOnlineKeywordPage, { generateMetadata } from './jamera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JameraOnlineKeywordPage />;
}
