import ActiveCanobForumKeywordPage, { generateMetadata } from './active-canob-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCanobForumKeywordPage />;
}
