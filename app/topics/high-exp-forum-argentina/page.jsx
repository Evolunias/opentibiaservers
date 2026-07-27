import HighExpForumArgentinaKeywordPage, { generateMetadata } from './high-exp-forum-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpForumArgentinaKeywordPage />;
}
