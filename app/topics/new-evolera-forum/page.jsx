import NewEvoleraForumKeywordPage, { generateMetadata } from './new-evolera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoleraForumKeywordPage />;
}
