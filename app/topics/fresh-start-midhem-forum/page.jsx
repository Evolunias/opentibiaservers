import FreshStartMidhemForumKeywordPage, { generateMetadata } from './fresh-start-midhem-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMidhemForumKeywordPage />;
}
