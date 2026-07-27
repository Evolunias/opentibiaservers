import Tibia96RealMapGuideKeywordPage, { generateMetadata } from './tibia-9-6-real-map-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96RealMapGuideKeywordPage />;
}
