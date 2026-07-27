import NewSeasonArcaniarlTibiaKeywordPage, { generateMetadata } from './new-season-arcaniarl-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArcaniarlTibiaKeywordPage />;
}
