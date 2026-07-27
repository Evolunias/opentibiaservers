import NewSeasonKasteriaWebsiteKeywordPage, { generateMetadata } from './new-season-kasteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonKasteriaWebsiteKeywordPage />;
}
