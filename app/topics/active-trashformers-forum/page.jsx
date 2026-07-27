import ActiveTrashformersForumKeywordPage, { generateMetadata } from './active-trashformers-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTrashformersForumKeywordPage />;
}
