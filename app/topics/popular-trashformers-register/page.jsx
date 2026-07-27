import PopularTrashformersRegisterKeywordPage, { generateMetadata } from './popular-trashformers-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTrashformersRegisterKeywordPage />;
}
