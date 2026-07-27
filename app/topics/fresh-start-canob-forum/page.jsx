import FreshStartCanobForumKeywordPage, { generateMetadata } from './fresh-start-canob-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCanobForumKeywordPage />;
}
