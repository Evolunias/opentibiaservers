import RealMapDuraOnlineForumKeywordPage, { generateMetadata } from './real-map-dura-online-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDuraOnlineForumKeywordPage />;
}
