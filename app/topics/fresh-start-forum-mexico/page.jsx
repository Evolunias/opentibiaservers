import FreshStartForumMexicoKeywordPage, { generateMetadata } from './fresh-start-forum-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartForumMexicoKeywordPage />;
}
