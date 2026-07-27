import TrashformersOtsKeywordPage, { generateMetadata } from './trashformers-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersOtsKeywordPage />;
}
