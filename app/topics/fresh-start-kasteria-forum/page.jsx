import FreshStartKasteriaForumKeywordPage, { generateMetadata } from './fresh-start-kasteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartKasteriaForumKeywordPage />;
}
