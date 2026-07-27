import Trashformers15WithActivePlayersServerKeywordPage, { generateMetadata } from './trashformers-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers15WithActivePlayersServerKeywordPage />;
}
