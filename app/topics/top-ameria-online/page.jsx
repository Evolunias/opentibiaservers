import TopAmeriaOnlineKeywordPage, { generateMetadata } from './top-ameria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAmeriaOnlineKeywordPage />;
}
