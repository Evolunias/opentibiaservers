import NewSeasonInfernalOtWikiKeywordPage, { generateMetadata } from './new-season-infernal-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonInfernalOtWikiKeywordPage />;
}
