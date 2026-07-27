import Alastera12WithActivePlayersServerKeywordPage, { generateMetadata } from './alastera-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera12WithActivePlayersServerKeywordPage />;
}
