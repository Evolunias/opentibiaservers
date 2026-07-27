import DuraOnlinePrivateServerKeywordPage, { generateMetadata } from './dura-online-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlinePrivateServerKeywordPage />;
}
