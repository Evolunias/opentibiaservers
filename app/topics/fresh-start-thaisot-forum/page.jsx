import FreshStartThaisotForumKeywordPage, { generateMetadata } from './fresh-start-thaisot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThaisotForumKeywordPage />;
}
