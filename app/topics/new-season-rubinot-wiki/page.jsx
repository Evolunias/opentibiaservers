import NewSeasonRubinotWikiKeywordPage, { generateMetadata } from './new-season-rubinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRubinotWikiKeywordPage />;
}
