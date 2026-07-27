import Alastera15WithActivePlayersServerKeywordPage, { generateMetadata } from './alastera-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera15WithActivePlayersServerKeywordPage />;
}
