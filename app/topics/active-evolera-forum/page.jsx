import ActiveEvoleraForumKeywordPage, { generateMetadata } from './active-evolera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoleraForumKeywordPage />;
}
