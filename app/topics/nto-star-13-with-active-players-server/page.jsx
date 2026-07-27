import NtoStar13WithActivePlayersServerKeywordPage, { generateMetadata } from './nto-star-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar13WithActivePlayersServerKeywordPage />;
}
