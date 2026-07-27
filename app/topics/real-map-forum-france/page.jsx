import RealMapForumFranceKeywordPage, { generateMetadata } from './real-map-forum-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapForumFranceKeywordPage />;
}
