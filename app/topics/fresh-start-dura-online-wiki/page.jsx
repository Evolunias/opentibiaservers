import FreshStartDuraOnlineWikiKeywordPage, { generateMetadata } from './fresh-start-dura-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartDuraOnlineWikiKeywordPage />;
}
