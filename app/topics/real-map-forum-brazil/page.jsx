import RealMapForumBrazilKeywordPage, { generateMetadata } from './real-map-forum-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapForumBrazilKeywordPage />;
}
