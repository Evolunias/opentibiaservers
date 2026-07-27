import NewSeasonNoxiousotWikiKeywordPage, { generateMetadata } from './new-season-noxiousot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNoxiousotWikiKeywordPage />;
}
