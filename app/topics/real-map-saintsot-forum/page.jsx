import RealMapSaintsotForumKeywordPage, { generateMetadata } from './real-map-saintsot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSaintsotForumKeywordPage />;
}
