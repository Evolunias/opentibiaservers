import RetroForumMexicoKeywordPage, { generateMetadata } from './retro-forum-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroForumMexicoKeywordPage />;
}
