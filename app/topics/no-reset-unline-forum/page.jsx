import NoResetUnlineForumKeywordPage, { generateMetadata } from './no-reset-unline-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetUnlineForumKeywordPage />;
}
