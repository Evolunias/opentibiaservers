import Carlinot14WithActivePlayersServerKeywordPage, { generateMetadata } from './carlinot-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot14WithActivePlayersServerKeywordPage />;
}
