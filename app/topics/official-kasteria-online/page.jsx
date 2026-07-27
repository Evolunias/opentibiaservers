import OfficialKasteriaOnlineKeywordPage, { generateMetadata } from './official-kasteria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialKasteriaOnlineKeywordPage />;
}
