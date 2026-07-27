import NewSeasonRubinotKeywordPage, { generateMetadata } from './new-season-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRubinotKeywordPage />;
}
