import WithActivePlayersNepreniaServerKeywordPage, { generateMetadata } from './with-active-players-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersNepreniaServerKeywordPage />;
}
