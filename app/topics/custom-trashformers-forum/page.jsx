import CustomTrashformersForumKeywordPage, { generateMetadata } from './custom-trashformers-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTrashformersForumKeywordPage />;
}
