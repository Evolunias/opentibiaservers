import FreshStartForumLatinAmericaKeywordPage, { generateMetadata } from './fresh-start-forum-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartForumLatinAmericaKeywordPage />;
}
