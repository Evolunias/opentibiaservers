import WithActivePlayersVenoreotServerKeywordPage, { generateMetadata } from './with-active-players-venoreot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersVenoreotServerKeywordPage />;
}
