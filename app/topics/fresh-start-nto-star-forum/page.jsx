import FreshStartNtoStarForumKeywordPage, { generateMetadata } from './fresh-start-nto-star-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNtoStarForumKeywordPage />;
}
