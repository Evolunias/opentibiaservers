import HighrateOlderaForumKeywordPage, { generateMetadata } from './highrate-oldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOlderaForumKeywordPage />;
}
