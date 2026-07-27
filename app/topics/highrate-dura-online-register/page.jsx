import HighrateDuraOnlineRegisterKeywordPage, { generateMetadata } from './highrate-dura-online-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateDuraOnlineRegisterKeywordPage />;
}
