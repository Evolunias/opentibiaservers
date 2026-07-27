import FreshStartRealestaForumKeywordPage, { generateMetadata } from './fresh-start-realesta-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRealestaForumKeywordPage />;
}
