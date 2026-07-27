import Tibia100PvpeGuideKeywordPage, { generateMetadata } from './tibia-10-0-pvpe-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpeGuideKeywordPage />;
}
