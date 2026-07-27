import NewSeasonOxygenotWebsiteKeywordPage, { generateMetadata } from './new-season-oxygenot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOxygenotWebsiteKeywordPage />;
}
