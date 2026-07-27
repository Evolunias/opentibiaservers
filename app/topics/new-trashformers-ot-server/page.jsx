import NewTrashformersOtServerKeywordPage, { generateMetadata } from './new-trashformers-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTrashformersOtServerKeywordPage />;
}
