import RealMapRealestaForumKeywordPage, { generateMetadata } from './real-map-realesta-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRealestaForumKeywordPage />;
}
