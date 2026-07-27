import Alastera96WithActivePlayersServerKeywordPage, { generateMetadata } from './alastera-9-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera96WithActivePlayersServerKeywordPage />;
}
