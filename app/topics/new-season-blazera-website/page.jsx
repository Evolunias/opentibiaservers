import NewSeasonBlazeraWebsiteKeywordPage, { generateMetadata } from './new-season-blazera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonBlazeraWebsiteKeywordPage />;
}
