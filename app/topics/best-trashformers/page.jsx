import BestTrashformersKeywordPage, { generateMetadata } from './best-trashformers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTrashformersKeywordPage />;
}
