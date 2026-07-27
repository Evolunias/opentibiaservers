import NewSeasonSaintsotOpenTibiaKeywordPage, { generateMetadata } from './new-season-saintsot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSaintsotOpenTibiaKeywordPage />;
}
