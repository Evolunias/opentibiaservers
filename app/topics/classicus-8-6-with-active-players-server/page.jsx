import Classicus86WithActivePlayersServerKeywordPage, { generateMetadata } from './classicus-8-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus86WithActivePlayersServerKeywordPage />;
}
