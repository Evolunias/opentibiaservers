import Tibia13RealMapGuideKeywordPage, { generateMetadata } from './tibia-13-real-map-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RealMapGuideKeywordPage />;
}
