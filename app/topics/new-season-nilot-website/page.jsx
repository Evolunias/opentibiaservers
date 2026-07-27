import NewSeasonNilotWebsiteKeywordPage, { generateMetadata } from './new-season-nilot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNilotWebsiteKeywordPage />;
}
