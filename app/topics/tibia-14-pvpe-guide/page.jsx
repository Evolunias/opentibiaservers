import Tibia14PvpeGuideKeywordPage, { generateMetadata } from './tibia-14-pvpe-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpeGuideKeywordPage />;
}
