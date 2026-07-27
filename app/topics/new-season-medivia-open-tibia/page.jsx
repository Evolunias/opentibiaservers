import NewSeasonMediviaOpenTibiaKeywordPage, { generateMetadata } from './new-season-medivia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMediviaOpenTibiaKeywordPage />;
}
