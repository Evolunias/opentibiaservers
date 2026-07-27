import FreshStartZezeniaOnlineWikiKeywordPage, { generateMetadata } from './fresh-start-zezenia-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartZezeniaOnlineWikiKeywordPage />;
}
