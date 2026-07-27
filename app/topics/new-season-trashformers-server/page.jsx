import NewSeasonTrashformersServerKeywordPage, { generateMetadata } from './new-season-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTrashformersServerKeywordPage />;
}
