import HighrateTrashformersForumKeywordPage, { generateMetadata } from './highrate-trashformers-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTrashformersForumKeywordPage />;
}
