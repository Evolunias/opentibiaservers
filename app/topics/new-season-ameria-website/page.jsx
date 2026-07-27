import NewSeasonAmeriaWebsiteKeywordPage, { generateMetadata } from './new-season-ameria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAmeriaWebsiteKeywordPage />;
}
