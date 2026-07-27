import BestKasteriaForumKeywordPage, { generateMetadata } from './best-kasteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestKasteriaForumKeywordPage />;
}
