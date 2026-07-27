import CustomTrashformersServerKeywordPage, { generateMetadata } from './custom-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTrashformersServerKeywordPage />;
}
