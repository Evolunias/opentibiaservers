import PopularZezeniaOnlinePrivateServerKeywordPage, { generateMetadata } from './popular-zezenia-online-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularZezeniaOnlinePrivateServerKeywordPage />;
}
