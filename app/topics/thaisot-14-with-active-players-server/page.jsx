import Thaisot14WithActivePlayersServerKeywordPage, { generateMetadata } from './thaisot-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot14WithActivePlayersServerKeywordPage />;
}
