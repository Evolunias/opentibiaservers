import FreshStartMiracleForumKeywordPage, { generateMetadata } from './fresh-start-miracle-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMiracleForumKeywordPage />;
}
