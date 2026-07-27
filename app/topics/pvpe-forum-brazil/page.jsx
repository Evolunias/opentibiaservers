import PvpeForumBrazilKeywordPage, { generateMetadata } from './pvpe-forum-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeForumBrazilKeywordPage />;
}
