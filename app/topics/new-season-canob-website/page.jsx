import NewSeasonCanobWebsiteKeywordPage, { generateMetadata } from './new-season-canob-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCanobWebsiteKeywordPage />;
}
