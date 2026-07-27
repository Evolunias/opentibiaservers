import BestAmeriaForumKeywordPage, { generateMetadata } from './best-ameria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAmeriaForumKeywordPage />;
}
