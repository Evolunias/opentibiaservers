import RealMapForumPolandKeywordPage, { generateMetadata } from './real-map-forum-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapForumPolandKeywordPage />;
}
