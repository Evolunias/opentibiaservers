import NewSeasonArchlightTibiaKeywordPage, { generateMetadata } from './new-season-archlight-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArchlightTibiaKeywordPage />;
}
