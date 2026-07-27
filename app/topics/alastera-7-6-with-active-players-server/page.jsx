import Alastera76WithActivePlayersServerKeywordPage, { generateMetadata } from './alastera-7-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera76WithActivePlayersServerKeywordPage />;
}
