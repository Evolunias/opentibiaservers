import FreshStartForumEuropeKeywordPage, { generateMetadata } from './fresh-start-forum-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartForumEuropeKeywordPage />;
}
