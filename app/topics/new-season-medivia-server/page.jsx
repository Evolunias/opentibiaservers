import NewSeasonMediviaServerKeywordPage, { generateMetadata } from './new-season-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMediviaServerKeywordPage />;
}
