import NewSeasonArcaniarlOtsKeywordPage, { generateMetadata } from './new-season-arcaniarl-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArcaniarlOtsKeywordPage />;
}
