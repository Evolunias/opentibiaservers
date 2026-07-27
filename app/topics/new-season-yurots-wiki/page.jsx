import NewSeasonYurotsWikiKeywordPage, { generateMetadata } from './new-season-yurots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonYurotsWikiKeywordPage />;
}
