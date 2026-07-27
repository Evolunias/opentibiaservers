import NewSeasonMediviaWebsiteKeywordPage, { generateMetadata } from './new-season-medivia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMediviaWebsiteKeywordPage />;
}
