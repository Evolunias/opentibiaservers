import BestDemolidoresForumKeywordPage, { generateMetadata } from './best-demolidores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestDemolidoresForumKeywordPage />;
}
