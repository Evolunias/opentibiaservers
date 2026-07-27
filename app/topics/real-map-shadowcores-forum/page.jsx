import RealMapShadowcoresForumKeywordPage, { generateMetadata } from './real-map-shadowcores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapShadowcoresForumKeywordPage />;
}
