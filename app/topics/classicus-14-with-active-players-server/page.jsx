import Classicus14WithActivePlayersServerKeywordPage, { generateMetadata } from './classicus-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus14WithActivePlayersServerKeywordPage />;
}
