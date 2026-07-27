import NewSeasonArcaniarlOpenTibiaKeywordPage, { generateMetadata } from './new-season-arcaniarl-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArcaniarlOpenTibiaKeywordPage />;
}
