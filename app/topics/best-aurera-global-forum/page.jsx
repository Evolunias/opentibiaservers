import BestAureraGlobalForumKeywordPage, { generateMetadata } from './best-aurera-global-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAureraGlobalForumKeywordPage />;
}
