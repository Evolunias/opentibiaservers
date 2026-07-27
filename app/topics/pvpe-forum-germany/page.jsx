import PvpeForumGermanyKeywordPage, { generateMetadata } from './pvpe-forum-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeForumGermanyKeywordPage />;
}
