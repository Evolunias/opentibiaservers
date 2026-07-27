import CurrentTrashformersForumKeywordPage, { generateMetadata } from './current-trashformers-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTrashformersForumKeywordPage />;
}
