import Tibia81PvpeGuideKeywordPage, { generateMetadata } from './tibia-8-1-pvpe-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpeGuideKeywordPage />;
}
