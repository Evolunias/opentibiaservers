import FreshStartAmeriaForumKeywordPage, { generateMetadata } from './fresh-start-ameria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAmeriaForumKeywordPage />;
}
