import NewSeasonTibiaraWebsiteKeywordPage, { generateMetadata } from './new-season-tibiara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaraWebsiteKeywordPage />;
}
