import RetroForumArgentinaKeywordPage, { generateMetadata } from './retro-forum-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroForumArgentinaKeywordPage />;
}
