import RealMapArchlightForumKeywordPage, { generateMetadata } from './real-map-archlight-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArchlightForumKeywordPage />;
}
