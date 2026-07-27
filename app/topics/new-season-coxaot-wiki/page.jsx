import NewSeasonCoxaotWikiKeywordPage, { generateMetadata } from './new-season-coxaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCoxaotWikiKeywordPage />;
}
