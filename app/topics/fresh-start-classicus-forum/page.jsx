import FreshStartClassicusForumKeywordPage, { generateMetadata } from './fresh-start-classicus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClassicusForumKeywordPage />;
}
