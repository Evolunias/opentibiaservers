import NtoStar14WithActivePlayersServerKeywordPage, { generateMetadata } from './nto-star-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar14WithActivePlayersServerKeywordPage />;
}
