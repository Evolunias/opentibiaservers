import RealMapLumineraForumKeywordPage, { generateMetadata } from './real-map-luminera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLumineraForumKeywordPage />;
}
