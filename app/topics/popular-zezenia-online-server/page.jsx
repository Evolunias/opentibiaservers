import PopularZezeniaOnlineServerKeywordPage, { generateMetadata } from './popular-zezenia-online-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularZezeniaOnlineServerKeywordPage />;
}
