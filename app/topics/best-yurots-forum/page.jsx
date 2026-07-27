import BestYurotsForumKeywordPage, { generateMetadata } from './best-yurots-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestYurotsForumKeywordPage />;
}
