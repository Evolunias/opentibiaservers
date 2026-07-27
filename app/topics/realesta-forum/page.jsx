import RealestaForumKeywordPage, { generateMetadata } from './realesta-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaForumKeywordPage />;
}
