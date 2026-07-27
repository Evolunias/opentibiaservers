import PopularZezeniaOnlineLoginKeywordPage, { generateMetadata } from './popular-zezenia-online-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularZezeniaOnlineLoginKeywordPage />;
}
