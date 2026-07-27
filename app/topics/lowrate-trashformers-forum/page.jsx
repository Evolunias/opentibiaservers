import LowrateTrashformersForumKeywordPage, { generateMetadata } from './lowrate-trashformers-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTrashformersForumKeywordPage />;
}
