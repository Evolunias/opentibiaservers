import HighrateEvoleraForumKeywordPage, { generateMetadata } from './highrate-evolera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoleraForumKeywordPage />;
}
