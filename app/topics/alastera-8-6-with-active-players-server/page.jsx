import Alastera86WithActivePlayersServerKeywordPage, { generateMetadata } from './alastera-8-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera86WithActivePlayersServerKeywordPage />;
}
