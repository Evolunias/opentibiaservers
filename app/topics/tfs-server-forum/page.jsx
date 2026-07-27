import TfsServerForumKeywordPage, { generateMetadata } from './tfs-server-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TfsServerForumKeywordPage />;
}
