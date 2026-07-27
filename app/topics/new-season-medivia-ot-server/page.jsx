import NewSeasonMediviaOtServerKeywordPage, { generateMetadata } from './new-season-medivia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMediviaOtServerKeywordPage />;
}
