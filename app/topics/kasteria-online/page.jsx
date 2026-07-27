import KasteriaOnlineKeywordPage, { generateMetadata } from './kasteria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaOnlineKeywordPage />;
}
