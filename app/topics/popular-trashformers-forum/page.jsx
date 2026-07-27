import PopularTrashformersForumKeywordPage, { generateMetadata } from './popular-trashformers-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTrashformersForumKeywordPage />;
}
