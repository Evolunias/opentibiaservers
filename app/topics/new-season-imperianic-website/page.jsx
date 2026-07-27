import NewSeasonImperianicWebsiteKeywordPage, { generateMetadata } from './new-season-imperianic-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonImperianicWebsiteKeywordPage />;
}
