import FreshStartUnlineForumKeywordPage, { generateMetadata } from './fresh-start-unline-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartUnlineForumKeywordPage />;
}
