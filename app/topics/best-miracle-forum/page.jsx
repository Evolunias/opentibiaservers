import BestMiracleForumKeywordPage, { generateMetadata } from './best-miracle-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMiracleForumKeywordPage />;
}
