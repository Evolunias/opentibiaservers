import OfficialAmeriaOnlineKeywordPage, { generateMetadata } from './official-ameria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAmeriaOnlineKeywordPage />;
}
