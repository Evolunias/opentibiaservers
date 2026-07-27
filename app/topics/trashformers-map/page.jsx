import TrashformersMapKeywordPage, { generateMetadata } from './trashformers-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersMapKeywordPage />;
}
