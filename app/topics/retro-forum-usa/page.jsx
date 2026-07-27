import RetroForumUsaKeywordPage, { generateMetadata } from './retro-forum-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroForumUsaKeywordPage />;
}
