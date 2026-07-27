import TheForgottenServerForumKeywordPage, { generateMetadata } from './the-forgotten-server-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerForumKeywordPage />;
}
