import NewSeasonRealeraWebsiteKeywordPage, { generateMetadata } from './new-season-realera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealeraWebsiteKeywordPage />;
}
