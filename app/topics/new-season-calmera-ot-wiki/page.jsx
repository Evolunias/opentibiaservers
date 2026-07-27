import NewSeasonCalmeraOtWikiKeywordPage, { generateMetadata } from './new-season-calmera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCalmeraOtWikiKeywordPage />;
}
