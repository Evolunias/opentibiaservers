import NewSeasonArcaniarlServerKeywordPage, { generateMetadata } from './new-season-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArcaniarlServerKeywordPage />;
}
