import RealMapForumUkKeywordPage, { generateMetadata } from './real-map-forum-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapForumUkKeywordPage />;
}
