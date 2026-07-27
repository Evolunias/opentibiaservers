import NewSeasonRealestaWebsiteKeywordPage, { generateMetadata } from './new-season-realesta-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealestaWebsiteKeywordPage />;
}
