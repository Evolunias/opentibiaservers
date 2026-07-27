import FreshStartAlasteraForumKeywordPage, { generateMetadata } from './fresh-start-alastera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAlasteraForumKeywordPage />;
}
