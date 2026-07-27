import HighExpForumGermanyKeywordPage, { generateMetadata } from './high-exp-forum-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpForumGermanyKeywordPage />;
}
