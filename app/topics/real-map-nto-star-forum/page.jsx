import RealMapNtoStarForumKeywordPage, { generateMetadata } from './real-map-nto-star-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNtoStarForumKeywordPage />;
}
