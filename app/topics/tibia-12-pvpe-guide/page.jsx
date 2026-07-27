import Tibia12PvpeGuideKeywordPage, { generateMetadata } from './tibia-12-pvpe-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpeGuideKeywordPage />;
}
