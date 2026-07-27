import ActiveTrashformersRegisterKeywordPage, { generateMetadata } from './active-trashformers-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTrashformersRegisterKeywordPage />;
}
