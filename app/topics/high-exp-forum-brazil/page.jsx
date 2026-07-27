import HighExpForumBrazilKeywordPage, { generateMetadata } from './high-exp-forum-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpForumBrazilKeywordPage />;
}
