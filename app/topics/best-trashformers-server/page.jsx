import BestTrashformersServerKeywordPage, { generateMetadata } from './best-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTrashformersServerKeywordPage />;
}
