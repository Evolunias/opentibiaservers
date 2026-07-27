import NewSeasonTibiaraTibiaKeywordPage, { generateMetadata } from './new-season-tibiara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaraTibiaKeywordPage />;
}
