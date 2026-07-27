import Trashformers12WithActivePlayersServerKeywordPage, { generateMetadata } from './trashformers-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers12WithActivePlayersServerKeywordPage />;
}
