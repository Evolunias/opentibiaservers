import RealMapForumUsaKeywordPage, { generateMetadata } from './real-map-forum-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapForumUsaKeywordPage />;
}
