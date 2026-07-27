import NewSeasonTibiascapeWikiKeywordPage, { generateMetadata } from './new-season-tibiascape-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiascapeWikiKeywordPage />;
}
