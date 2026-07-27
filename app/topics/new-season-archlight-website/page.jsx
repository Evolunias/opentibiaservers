import NewSeasonArchlightWebsiteKeywordPage, { generateMetadata } from './new-season-archlight-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArchlightWebsiteKeywordPage />;
}
