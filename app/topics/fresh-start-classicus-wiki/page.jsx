import FreshStartClassicusWikiKeywordPage, { generateMetadata } from './fresh-start-classicus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClassicusWikiKeywordPage />;
}
