import Trashformers11WithActivePlayersServerKeywordPage, { generateMetadata } from './trashformers-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers11WithActivePlayersServerKeywordPage />;
}
