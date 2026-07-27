import EvoForumMexicoKeywordPage, { generateMetadata } from './evo-forum-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoForumMexicoKeywordPage />;
}
