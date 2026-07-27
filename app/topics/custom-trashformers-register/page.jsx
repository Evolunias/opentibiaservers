import CustomTrashformersRegisterKeywordPage, { generateMetadata } from './custom-trashformers-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTrashformersRegisterKeywordPage />;
}
