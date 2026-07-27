import LowExpForumArgentinaKeywordPage, { generateMetadata } from './low-exp-forum-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpForumArgentinaKeywordPage />;
}
