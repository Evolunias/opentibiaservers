import NewTrashformersOtsKeywordPage, { generateMetadata } from './new-trashformers-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTrashformersOtsKeywordPage />;
}
