import TopMidhemForumKeywordPage, { generateMetadata } from './top-midhem-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMidhemForumKeywordPage />;
}
