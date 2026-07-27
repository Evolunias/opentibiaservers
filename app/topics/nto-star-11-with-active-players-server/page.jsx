import NtoStar11WithActivePlayersServerKeywordPage, { generateMetadata } from './nto-star-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar11WithActivePlayersServerKeywordPage />;
}
