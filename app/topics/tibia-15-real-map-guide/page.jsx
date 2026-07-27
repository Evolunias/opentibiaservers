import Tibia15RealMapGuideKeywordPage, { generateMetadata } from './tibia-15-real-map-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RealMapGuideKeywordPage />;
}
