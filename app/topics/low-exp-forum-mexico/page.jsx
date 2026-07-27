import LowExpForumMexicoKeywordPage, { generateMetadata } from './low-exp-forum-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpForumMexicoKeywordPage />;
}
