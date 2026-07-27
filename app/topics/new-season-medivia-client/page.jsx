import NewSeasonMediviaClientKeywordPage, { generateMetadata } from './new-season-medivia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMediviaClientKeywordPage />;
}
