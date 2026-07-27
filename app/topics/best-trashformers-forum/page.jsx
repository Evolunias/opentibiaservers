import BestTrashformersForumKeywordPage, { generateMetadata } from './best-trashformers-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTrashformersForumKeywordPage />;
}
