import HighExpForumEuropeKeywordPage, { generateMetadata } from './high-exp-forum-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpForumEuropeKeywordPage />;
}
