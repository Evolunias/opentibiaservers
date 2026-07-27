import Carlinot11WithActivePlayersServerKeywordPage, { generateMetadata } from './carlinot-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot11WithActivePlayersServerKeywordPage />;
}
