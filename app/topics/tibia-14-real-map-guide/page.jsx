import Tibia14RealMapGuideKeywordPage, { generateMetadata } from './tibia-14-real-map-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RealMapGuideKeywordPage />;
}
