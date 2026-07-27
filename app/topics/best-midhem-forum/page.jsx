import BestMidhemForumKeywordPage, { generateMetadata } from './best-midhem-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMidhemForumKeywordPage />;
}
