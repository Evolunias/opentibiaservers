import TopZezeniaOnlinePrivateServerKeywordPage, { generateMetadata } from './top-zezenia-online-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopZezeniaOnlinePrivateServerKeywordPage />;
}
