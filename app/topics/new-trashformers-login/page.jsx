import NewTrashformersLoginKeywordPage, { generateMetadata } from './new-trashformers-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTrashformersLoginKeywordPage />;
}
