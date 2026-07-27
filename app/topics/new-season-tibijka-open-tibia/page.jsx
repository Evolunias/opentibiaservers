import NewSeasonTibijkaOpenTibiaKeywordPage, { generateMetadata } from './new-season-tibijka-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibijkaOpenTibiaKeywordPage />;
}
