import Noxiousot11WithActivePlayersServerKeywordPage, { generateMetadata } from './noxiousot-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Noxiousot11WithActivePlayersServerKeywordPage />;
}
