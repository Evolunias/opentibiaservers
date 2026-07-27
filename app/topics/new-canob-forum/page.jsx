import NewCanobForumKeywordPage, { generateMetadata } from './new-canob-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCanobForumKeywordPage />;
}
