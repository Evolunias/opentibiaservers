import BestTrashformersOtKeywordPage, { generateMetadata } from './best-trashformers-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTrashformersOtKeywordPage />;
}
