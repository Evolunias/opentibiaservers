import FreshStartCoxaotForumKeywordPage, { generateMetadata } from './fresh-start-coxaot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCoxaotForumKeywordPage />;
}
