import NewSeasonTibianusWebsiteKeywordPage, { generateMetadata } from './new-season-tibianus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibianusWebsiteKeywordPage />;
}
