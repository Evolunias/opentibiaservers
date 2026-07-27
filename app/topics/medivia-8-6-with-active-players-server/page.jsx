import Medivia86WithActivePlayersServerKeywordPage, { generateMetadata } from './medivia-8-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia86WithActivePlayersServerKeywordPage />;
}
