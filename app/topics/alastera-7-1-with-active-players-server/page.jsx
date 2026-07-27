import Alastera71WithActivePlayersServerKeywordPage, { generateMetadata } from './alastera-7-1-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera71WithActivePlayersServerKeywordPage />;
}
