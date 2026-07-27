import NewSeasonArchlightOpenTibiaKeywordPage, { generateMetadata } from './new-season-archlight-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArchlightOpenTibiaKeywordPage />;
}
