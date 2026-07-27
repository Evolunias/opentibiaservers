import NoResetEvoleraForumKeywordPage, { generateMetadata } from './no-reset-evolera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEvoleraForumKeywordPage />;
}
