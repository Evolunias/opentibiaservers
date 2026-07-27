import NewSeasonSaintsotTibiaKeywordPage, { generateMetadata } from './new-season-saintsot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSaintsotTibiaKeywordPage />;
}
