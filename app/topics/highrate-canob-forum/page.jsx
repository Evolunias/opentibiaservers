import HighrateCanobForumKeywordPage, { generateMetadata } from './highrate-canob-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCanobForumKeywordPage />;
}
