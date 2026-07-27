import WithActivePlayersNtoStarServerKeywordPage, { generateMetadata } from './with-active-players-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersNtoStarServerKeywordPage />;
}
