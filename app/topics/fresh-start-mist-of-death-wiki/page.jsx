import FreshStartMistOfDeathWikiKeywordPage, { generateMetadata } from './fresh-start-mist-of-death-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMistOfDeathWikiKeywordPage />;
}
