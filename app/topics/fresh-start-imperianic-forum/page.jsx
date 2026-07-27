import FreshStartImperianicForumKeywordPage, { generateMetadata } from './fresh-start-imperianic-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartImperianicForumKeywordPage />;
}
