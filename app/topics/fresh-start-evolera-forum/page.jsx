import FreshStartEvoleraForumKeywordPage, { generateMetadata } from './fresh-start-evolera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartEvoleraForumKeywordPage />;
}
