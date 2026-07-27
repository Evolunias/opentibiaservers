import EvoleraForumKeywordPage, { generateMetadata } from './evolera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraForumKeywordPage />;
}
