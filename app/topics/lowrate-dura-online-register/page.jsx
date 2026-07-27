import LowrateDuraOnlineRegisterKeywordPage, { generateMetadata } from './lowrate-dura-online-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateDuraOnlineRegisterKeywordPage />;
}
