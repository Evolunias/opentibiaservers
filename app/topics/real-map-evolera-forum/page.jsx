import RealMapEvoleraForumKeywordPage, { generateMetadata } from './real-map-evolera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEvoleraForumKeywordPage />;
}
