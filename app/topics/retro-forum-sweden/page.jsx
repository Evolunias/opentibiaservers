import RetroForumSwedenKeywordPage, { generateMetadata } from './retro-forum-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroForumSwedenKeywordPage />;
}
