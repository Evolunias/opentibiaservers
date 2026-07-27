import FunServerForumKeywordPage, { generateMetadata } from './fun-server-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FunServerForumKeywordPage />;
}
