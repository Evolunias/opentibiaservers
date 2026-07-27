import NewTrashformersKeywordPage, { generateMetadata } from './new-trashformers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTrashformersKeywordPage />;
}
