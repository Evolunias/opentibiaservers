import RetroForumEuropeKeywordPage, { generateMetadata } from './retro-forum-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroForumEuropeKeywordPage />;
}
