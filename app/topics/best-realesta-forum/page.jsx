import BestRealestaForumKeywordPage, { generateMetadata } from './best-realesta-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealestaForumKeywordPage />;
}
