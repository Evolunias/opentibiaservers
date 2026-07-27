import NewOlderaForumKeywordPage, { generateMetadata } from './new-oldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOlderaForumKeywordPage />;
}
