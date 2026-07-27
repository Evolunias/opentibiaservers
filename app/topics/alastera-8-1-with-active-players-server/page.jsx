import Alastera81WithActivePlayersServerKeywordPage, { generateMetadata } from './alastera-8-1-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera81WithActivePlayersServerKeywordPage />;
}
