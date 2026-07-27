import HighrateDuraOnlineServerKeywordPage, { generateMetadata } from './highrate-dura-online-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateDuraOnlineServerKeywordPage />;
}
