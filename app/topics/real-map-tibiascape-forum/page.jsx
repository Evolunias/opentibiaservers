import RealMapTibiascapeForumKeywordPage, { generateMetadata } from './real-map-tibiascape-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiascapeForumKeywordPage />;
}
