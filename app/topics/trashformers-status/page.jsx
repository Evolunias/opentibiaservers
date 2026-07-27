import TrashformersStatusKeywordPage, { generateMetadata } from './trashformers-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersStatusKeywordPage />;
}
