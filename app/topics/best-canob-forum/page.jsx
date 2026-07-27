import BestCanobForumKeywordPage, { generateMetadata } from './best-canob-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCanobForumKeywordPage />;
}
