import NewSeasonTrashformersKeywordPage, { generateMetadata } from './new-season-trashformers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTrashformersKeywordPage />;
}
