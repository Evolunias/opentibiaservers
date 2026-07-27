import NewSeasonUnlineWebsiteKeywordPage, { generateMetadata } from './new-season-unline-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonUnlineWebsiteKeywordPage />;
}
