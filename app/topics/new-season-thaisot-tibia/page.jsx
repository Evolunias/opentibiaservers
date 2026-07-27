import NewSeasonThaisotTibiaKeywordPage, { generateMetadata } from './new-season-thaisot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThaisotTibiaKeywordPage />;
}
