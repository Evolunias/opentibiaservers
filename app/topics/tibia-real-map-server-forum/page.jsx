import TibiaRealMapServerForumKeywordPage, { generateMetadata } from './tibia-real-map-server-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServerForumKeywordPage />;
}
