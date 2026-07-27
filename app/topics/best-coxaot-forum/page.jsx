import BestCoxaotForumKeywordPage, { generateMetadata } from './best-coxaot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCoxaotForumKeywordPage />;
}
