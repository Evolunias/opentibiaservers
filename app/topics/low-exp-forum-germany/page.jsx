import LowExpForumGermanyKeywordPage, { generateMetadata } from './low-exp-forum-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpForumGermanyKeywordPage />;
}
