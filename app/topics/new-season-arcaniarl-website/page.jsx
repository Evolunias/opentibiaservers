import NewSeasonArcaniarlWebsiteKeywordPage, { generateMetadata } from './new-season-arcaniarl-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArcaniarlWebsiteKeywordPage />;
}
