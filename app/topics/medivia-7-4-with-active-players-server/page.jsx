import Medivia74WithActivePlayersServerKeywordPage, { generateMetadata } from './medivia-7-4-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia74WithActivePlayersServerKeywordPage />;
}
