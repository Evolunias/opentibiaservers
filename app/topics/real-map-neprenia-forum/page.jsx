import RealMapNepreniaForumKeywordPage, { generateMetadata } from './real-map-neprenia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNepreniaForumKeywordPage />;
}
