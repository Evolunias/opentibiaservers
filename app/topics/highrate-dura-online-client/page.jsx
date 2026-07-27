import HighrateDuraOnlineClientKeywordPage, { generateMetadata } from './highrate-dura-online-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateDuraOnlineClientKeywordPage />;
}
