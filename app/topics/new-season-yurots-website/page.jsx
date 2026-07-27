import NewSeasonYurotsWebsiteKeywordPage, { generateMetadata } from './new-season-yurots-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonYurotsWebsiteKeywordPage />;
}
