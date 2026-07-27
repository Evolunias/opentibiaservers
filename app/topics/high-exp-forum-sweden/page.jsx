import HighExpForumSwedenKeywordPage, { generateMetadata } from './high-exp-forum-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpForumSwedenKeywordPage />;
}
