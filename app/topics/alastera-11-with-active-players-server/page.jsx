import Alastera11WithActivePlayersServerKeywordPage, { generateMetadata } from './alastera-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera11WithActivePlayersServerKeywordPage />;
}
