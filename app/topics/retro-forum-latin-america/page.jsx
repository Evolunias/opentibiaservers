import RetroForumLatinAmericaKeywordPage, { generateMetadata } from './retro-forum-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroForumLatinAmericaKeywordPage />;
}
