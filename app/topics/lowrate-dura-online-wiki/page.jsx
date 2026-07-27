import LowrateDuraOnlineWikiKeywordPage, { generateMetadata } from './lowrate-dura-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateDuraOnlineWikiKeywordPage />;
}
