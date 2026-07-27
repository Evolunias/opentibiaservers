import Alastera80WithActivePlayersServerKeywordPage, { generateMetadata } from './alastera-8-0-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera80WithActivePlayersServerKeywordPage />;
}
