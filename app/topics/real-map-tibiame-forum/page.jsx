import RealMapTibiameForumKeywordPage, { generateMetadata } from './real-map-tibiame-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiameForumKeywordPage />;
}
