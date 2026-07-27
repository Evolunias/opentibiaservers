import PopularZezeniaOnlineClientKeywordPage, { generateMetadata } from './popular-zezenia-online-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularZezeniaOnlineClientKeywordPage />;
}
