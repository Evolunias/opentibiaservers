import Carlinot13WithActivePlayersServerKeywordPage, { generateMetadata } from './carlinot-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot13WithActivePlayersServerKeywordPage />;
}
