import Tibianus11WithActivePlayersServerKeywordPage, { generateMetadata } from './tibianus-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus11WithActivePlayersServerKeywordPage />;
}
