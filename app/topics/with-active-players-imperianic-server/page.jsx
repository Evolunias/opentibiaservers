import WithActivePlayersImperianicServerKeywordPage, { generateMetadata } from './with-active-players-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersImperianicServerKeywordPage />;
}
