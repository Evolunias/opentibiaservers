import TopCanobForumKeywordPage, { generateMetadata } from './top-canob-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCanobForumKeywordPage />;
}
