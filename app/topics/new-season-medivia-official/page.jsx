import NewSeasonMediviaOfficialKeywordPage, { generateMetadata } from './new-season-medivia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMediviaOfficialKeywordPage />;
}
