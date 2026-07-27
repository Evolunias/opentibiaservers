import TopEvoleraForumKeywordPage, { generateMetadata } from './top-evolera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoleraForumKeywordPage />;
}
