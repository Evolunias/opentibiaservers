import FreshStartYurotsForumKeywordPage, { generateMetadata } from './fresh-start-yurots-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartYurotsForumKeywordPage />;
}
