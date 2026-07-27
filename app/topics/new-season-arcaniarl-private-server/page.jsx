import NewSeasonArcaniarlPrivateServerKeywordPage, { generateMetadata } from './new-season-arcaniarl-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArcaniarlPrivateServerKeywordPage />;
}
