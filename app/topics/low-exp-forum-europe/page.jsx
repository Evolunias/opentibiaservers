import LowExpForumEuropeKeywordPage, { generateMetadata } from './low-exp-forum-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpForumEuropeKeywordPage />;
}
