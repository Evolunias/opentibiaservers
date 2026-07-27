import RetroForumGermanyKeywordPage, { generateMetadata } from './retro-forum-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroForumGermanyKeywordPage />;
}
