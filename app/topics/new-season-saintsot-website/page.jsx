import NewSeasonSaintsotWebsiteKeywordPage, { generateMetadata } from './new-season-saintsot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSaintsotWebsiteKeywordPage />;
}
