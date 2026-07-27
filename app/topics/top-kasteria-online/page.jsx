import TopKasteriaOnlineKeywordPage, { generateMetadata } from './top-kasteria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopKasteriaOnlineKeywordPage />;
}
