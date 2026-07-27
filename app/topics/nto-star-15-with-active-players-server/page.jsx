import NtoStar15WithActivePlayersServerKeywordPage, { generateMetadata } from './nto-star-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar15WithActivePlayersServerKeywordPage />;
}
