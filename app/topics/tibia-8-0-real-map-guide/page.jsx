import Tibia80RealMapGuideKeywordPage, { generateMetadata } from './tibia-8-0-real-map-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RealMapGuideKeywordPage />;
}
