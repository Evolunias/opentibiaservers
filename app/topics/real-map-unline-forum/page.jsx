import RealMapUnlineForumKeywordPage, { generateMetadata } from './real-map-unline-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapUnlineForumKeywordPage />;
}
