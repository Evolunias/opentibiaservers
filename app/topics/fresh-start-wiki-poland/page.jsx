import FreshStartWikiPolandKeywordPage, { generateMetadata } from './fresh-start-wiki-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartWikiPolandKeywordPage />;
}
