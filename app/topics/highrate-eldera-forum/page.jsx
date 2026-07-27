import HighrateElderaForumKeywordPage, { generateMetadata } from './highrate-eldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateElderaForumKeywordPage />;
}
