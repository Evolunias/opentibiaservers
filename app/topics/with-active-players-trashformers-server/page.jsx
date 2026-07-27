import WithActivePlayersTrashformersServerKeywordPage, { generateMetadata } from './with-active-players-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersTrashformersServerKeywordPage />;
}
