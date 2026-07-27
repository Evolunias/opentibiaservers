import OfficialTrashformersRegisterKeywordPage, { generateMetadata } from './official-trashformers-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTrashformersRegisterKeywordPage />;
}
