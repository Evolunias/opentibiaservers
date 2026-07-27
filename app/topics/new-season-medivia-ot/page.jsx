import NewSeasonMediviaOtKeywordPage, { generateMetadata } from './new-season-medivia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMediviaOtKeywordPage />;
}
