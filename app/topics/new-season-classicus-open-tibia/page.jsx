import NewSeasonClassicusOpenTibiaKeywordPage, { generateMetadata } from './new-season-classicus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonClassicusOpenTibiaKeywordPage />;
}
