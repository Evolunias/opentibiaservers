import RealMapForumEuropeKeywordPage, { generateMetadata } from './real-map-forum-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapForumEuropeKeywordPage />;
}
