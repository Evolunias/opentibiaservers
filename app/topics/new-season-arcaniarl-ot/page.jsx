import NewSeasonArcaniarlOtKeywordPage, { generateMetadata } from './new-season-arcaniarl-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArcaniarlOtKeywordPage />;
}
