import Tibiantis11WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiantis-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis11WithActivePlayersServerKeywordPage />;
}
