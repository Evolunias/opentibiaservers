import RealMapForumArgentinaKeywordPage, { generateMetadata } from './real-map-forum-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapForumArgentinaKeywordPage />;
}
