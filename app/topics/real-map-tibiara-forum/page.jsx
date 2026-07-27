import RealMapTibiaraForumKeywordPage, { generateMetadata } from './real-map-tibiara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaraForumKeywordPage />;
}
