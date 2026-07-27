import RealMapTibianusForumKeywordPage, { generateMetadata } from './real-map-tibianus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibianusForumKeywordPage />;
}
