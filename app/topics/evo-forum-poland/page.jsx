import EvoForumPolandKeywordPage, { generateMetadata } from './evo-forum-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoForumPolandKeywordPage />;
}
