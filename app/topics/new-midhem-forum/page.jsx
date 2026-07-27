import NewMidhemForumKeywordPage, { generateMetadata } from './new-midhem-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMidhemForumKeywordPage />;
}
