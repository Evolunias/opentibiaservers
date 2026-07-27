import Alastera13WithActivePlayersServerKeywordPage, { generateMetadata } from './alastera-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera13WithActivePlayersServerKeywordPage />;
}
