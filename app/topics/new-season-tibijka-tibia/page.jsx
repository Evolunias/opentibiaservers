import NewSeasonTibijkaTibiaKeywordPage, { generateMetadata } from './new-season-tibijka-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibijkaTibiaKeywordPage />;
}
