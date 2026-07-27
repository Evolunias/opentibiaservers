import EvoForumBrazilKeywordPage, { generateMetadata } from './evo-forum-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoForumBrazilKeywordPage />;
}
