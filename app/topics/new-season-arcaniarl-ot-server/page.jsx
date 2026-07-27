import NewSeasonArcaniarlOtServerKeywordPage, { generateMetadata } from './new-season-arcaniarl-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArcaniarlOtServerKeywordPage />;
}
