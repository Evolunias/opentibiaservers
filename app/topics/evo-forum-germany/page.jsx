import EvoForumGermanyKeywordPage, { generateMetadata } from './evo-forum-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoForumGermanyKeywordPage />;
}
