import BestTrashformersOtServerKeywordPage, { generateMetadata } from './best-trashformers-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTrashformersOtServerKeywordPage />;
}
