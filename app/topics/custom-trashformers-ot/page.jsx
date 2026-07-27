import CustomTrashformersOtKeywordPage, { generateMetadata } from './custom-trashformers-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTrashformersOtKeywordPage />;
}
