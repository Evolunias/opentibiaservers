import PvpeForumSwedenKeywordPage, { generateMetadata } from './pvpe-forum-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeForumSwedenKeywordPage />;
}
