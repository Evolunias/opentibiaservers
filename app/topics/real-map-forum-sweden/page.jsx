import RealMapForumSwedenKeywordPage, { generateMetadata } from './real-map-forum-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapForumSwedenKeywordPage />;
}
