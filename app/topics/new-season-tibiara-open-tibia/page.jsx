import NewSeasonTibiaraOpenTibiaKeywordPage, { generateMetadata } from './new-season-tibiara-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaraOpenTibiaKeywordPage />;
}
