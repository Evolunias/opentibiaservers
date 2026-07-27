import RealMapForumNorthAmericaKeywordPage, { generateMetadata } from './real-map-forum-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapForumNorthAmericaKeywordPage />;
}
