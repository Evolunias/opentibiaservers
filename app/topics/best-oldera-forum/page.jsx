import BestOlderaForumKeywordPage, { generateMetadata } from './best-oldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOlderaForumKeywordPage />;
}
