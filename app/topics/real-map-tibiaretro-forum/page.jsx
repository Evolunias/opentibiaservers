import RealMapTibiaretroForumKeywordPage, { generateMetadata } from './real-map-tibiaretro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaretroForumKeywordPage />;
}
