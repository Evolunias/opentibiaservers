import CustomTrashformersOtServerKeywordPage, { generateMetadata } from './custom-trashformers-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTrashformersOtServerKeywordPage />;
}
