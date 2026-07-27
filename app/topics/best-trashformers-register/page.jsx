import BestTrashformersRegisterKeywordPage, { generateMetadata } from './best-trashformers-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTrashformersRegisterKeywordPage />;
}
