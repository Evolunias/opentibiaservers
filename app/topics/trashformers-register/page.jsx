import TrashformersRegisterKeywordPage, { generateMetadata } from './trashformers-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersRegisterKeywordPage />;
}
