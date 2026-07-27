import NewSeasonNilotWikiKeywordPage, { generateMetadata } from './new-season-nilot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNilotWikiKeywordPage />;
}
