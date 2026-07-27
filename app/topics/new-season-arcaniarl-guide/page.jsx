import NewSeasonArcaniarlGuideKeywordPage, { generateMetadata } from './new-season-arcaniarl-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArcaniarlGuideKeywordPage />;
}
