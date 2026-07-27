import FreshStartCyntaraForumKeywordPage, { generateMetadata } from './fresh-start-cyntara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCyntaraForumKeywordPage />;
}
