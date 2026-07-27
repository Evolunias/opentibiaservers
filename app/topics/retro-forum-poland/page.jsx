import RetroForumPolandKeywordPage, { generateMetadata } from './retro-forum-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroForumPolandKeywordPage />;
}
