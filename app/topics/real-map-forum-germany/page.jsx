import RealMapForumGermanyKeywordPage, { generateMetadata } from './real-map-forum-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapForumGermanyKeywordPage />;
}
