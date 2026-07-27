import Thaisot11WithActivePlayersServerKeywordPage, { generateMetadata } from './thaisot-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot11WithActivePlayersServerKeywordPage />;
}
