import RetroForumSouthAmericaKeywordPage, { generateMetadata } from './retro-forum-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroForumSouthAmericaKeywordPage />;
}
