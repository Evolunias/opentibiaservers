import TrashformersForumKeywordPage, { generateMetadata } from './trashformers-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersForumKeywordPage />;
}
