import Trashformers13WithActivePlayersServerKeywordPage, { generateMetadata } from './trashformers-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers13WithActivePlayersServerKeywordPage />;
}
