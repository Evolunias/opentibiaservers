import NewTrashformersForumKeywordPage, { generateMetadata } from './new-trashformers-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTrashformersForumKeywordPage />;
}
