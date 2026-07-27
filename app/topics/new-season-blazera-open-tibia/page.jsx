import NewSeasonBlazeraOpenTibiaKeywordPage, { generateMetadata } from './new-season-blazera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonBlazeraOpenTibiaKeywordPage />;
}
