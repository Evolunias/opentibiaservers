import TopZezeniaOnlineKeywordPage, { generateMetadata } from './top-zezenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopZezeniaOnlineKeywordPage />;
}
