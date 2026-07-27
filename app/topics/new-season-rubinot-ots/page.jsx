import NewSeasonRubinotOtsKeywordPage, { generateMetadata } from './new-season-rubinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRubinotOtsKeywordPage />;
}
