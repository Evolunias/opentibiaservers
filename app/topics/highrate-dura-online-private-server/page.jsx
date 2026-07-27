import HighrateDuraOnlinePrivateServerKeywordPage, { generateMetadata } from './highrate-dura-online-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateDuraOnlinePrivateServerKeywordPage />;
}
