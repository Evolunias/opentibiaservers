import NewSeasonNostaltherWebsiteKeywordPage, { generateMetadata } from './new-season-nostalther-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNostaltherWebsiteKeywordPage />;
}
