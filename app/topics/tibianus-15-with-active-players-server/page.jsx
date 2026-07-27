import Tibianus15WithActivePlayersServerKeywordPage, { generateMetadata } from './tibianus-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus15WithActivePlayersServerKeywordPage />;
}
