import LowExpForumPolandKeywordPage, { generateMetadata } from './low-exp-forum-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpForumPolandKeywordPage />;
}
