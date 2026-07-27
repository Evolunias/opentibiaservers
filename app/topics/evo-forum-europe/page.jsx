import EvoForumEuropeKeywordPage, { generateMetadata } from './evo-forum-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoForumEuropeKeywordPage />;
}
