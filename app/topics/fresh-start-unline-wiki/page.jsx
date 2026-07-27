import FreshStartUnlineWikiKeywordPage, { generateMetadata } from './fresh-start-unline-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartUnlineWikiKeywordPage />;
}
