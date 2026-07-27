import NewTrashformersRegisterKeywordPage, { generateMetadata } from './new-trashformers-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTrashformersRegisterKeywordPage />;
}
