import FreshStartForumNorthAmericaKeywordPage, { generateMetadata } from './fresh-start-forum-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartForumNorthAmericaKeywordPage />;
}
