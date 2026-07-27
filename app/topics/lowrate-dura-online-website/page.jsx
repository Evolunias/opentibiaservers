import LowrateDuraOnlineWebsiteKeywordPage, { generateMetadata } from './lowrate-dura-online-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateDuraOnlineWebsiteKeywordPage />;
}
