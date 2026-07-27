import Tibia13PvpeGuideKeywordPage, { generateMetadata } from './tibia-13-pvpe-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpeGuideKeywordPage />;
}
