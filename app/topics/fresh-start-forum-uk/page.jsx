import FreshStartForumUkKeywordPage, { generateMetadata } from './fresh-start-forum-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartForumUkKeywordPage />;
}
