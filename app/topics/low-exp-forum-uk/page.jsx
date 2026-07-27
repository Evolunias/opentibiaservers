import LowExpForumUkKeywordPage, { generateMetadata } from './low-exp-forum-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpForumUkKeywordPage />;
}
