import RealMapOtmadnessForumKeywordPage, { generateMetadata } from './real-map-otmadness-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtmadnessForumKeywordPage />;
}
