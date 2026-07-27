import NewSeasonZuneraOtWikiKeywordPage, { generateMetadata } from './new-season-zunera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonZuneraOtWikiKeywordPage />;
}
