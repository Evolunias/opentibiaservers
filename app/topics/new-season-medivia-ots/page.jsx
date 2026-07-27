import NewSeasonMediviaOtsKeywordPage, { generateMetadata } from './new-season-medivia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMediviaOtsKeywordPage />;
}
