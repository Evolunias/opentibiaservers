import BestCyntaraForumKeywordPage, { generateMetadata } from './best-cyntara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCyntaraForumKeywordPage />;
}
