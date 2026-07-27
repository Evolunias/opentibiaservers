import Tibia96PvpeGuideKeywordPage, { generateMetadata } from './tibia-9-6-pvpe-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpeGuideKeywordPage />;
}
