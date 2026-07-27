import Tibianus14WithActivePlayersServerKeywordPage, { generateMetadata } from './tibianus-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus14WithActivePlayersServerKeywordPage />;
}
