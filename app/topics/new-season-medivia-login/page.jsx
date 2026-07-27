import NewSeasonMediviaLoginKeywordPage, { generateMetadata } from './new-season-medivia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMediviaLoginKeywordPage />;
}
