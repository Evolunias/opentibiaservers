import BestUnlineForumKeywordPage, { generateMetadata } from './best-unline-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestUnlineForumKeywordPage />;
}
