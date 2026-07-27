import NewSeasonRubinotWebsiteKeywordPage, { generateMetadata } from './new-season-rubinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRubinotWebsiteKeywordPage />;
}
