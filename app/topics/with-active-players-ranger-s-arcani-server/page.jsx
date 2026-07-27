import WithActivePlayersRangerSArcaniServerKeywordPage, { generateMetadata } from './with-active-players-ranger-s-arcani-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersRangerSArcaniServerKeywordPage />;
}
