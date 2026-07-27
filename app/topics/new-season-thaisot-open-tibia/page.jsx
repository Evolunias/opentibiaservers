import NewSeasonThaisotOpenTibiaKeywordPage, { generateMetadata } from './new-season-thaisot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThaisotOpenTibiaKeywordPage />;
}
