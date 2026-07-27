import BestTrashformersOtsKeywordPage, { generateMetadata } from './best-trashformers-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTrashformersOtsKeywordPage />;
}
