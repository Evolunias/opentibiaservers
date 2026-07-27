import Carlinot12WithActivePlayersServerKeywordPage, { generateMetadata } from './carlinot-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot12WithActivePlayersServerKeywordPage />;
}
