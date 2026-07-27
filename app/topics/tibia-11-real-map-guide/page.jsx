import Tibia11RealMapGuideKeywordPage, { generateMetadata } from './tibia-11-real-map-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RealMapGuideKeywordPage />;
}
