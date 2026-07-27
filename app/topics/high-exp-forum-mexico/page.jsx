import HighExpForumMexicoKeywordPage, { generateMetadata } from './high-exp-forum-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpForumMexicoKeywordPage />;
}
