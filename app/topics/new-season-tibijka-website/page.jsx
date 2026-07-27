import NewSeasonTibijkaWebsiteKeywordPage, { generateMetadata } from './new-season-tibijka-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibijkaWebsiteKeywordPage />;
}
