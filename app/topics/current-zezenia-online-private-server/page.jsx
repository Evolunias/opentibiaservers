import CurrentZezeniaOnlinePrivateServerKeywordPage, { generateMetadata } from './current-zezenia-online-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZezeniaOnlinePrivateServerKeywordPage />;
}
