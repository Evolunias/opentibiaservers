import RetroForumNorthAmericaKeywordPage, { generateMetadata } from './retro-forum-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroForumNorthAmericaKeywordPage />;
}
