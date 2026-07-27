import NewSeasonMidhemWikiKeywordPage, { generateMetadata } from './new-season-midhem-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMidhemWikiKeywordPage />;
}
