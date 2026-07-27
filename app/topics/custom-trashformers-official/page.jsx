import CustomTrashformersOfficialKeywordPage, { generateMetadata } from './custom-trashformers-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTrashformersOfficialKeywordPage />;
}
