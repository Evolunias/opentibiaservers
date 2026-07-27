import Tibia11PvpeGuideKeywordPage, { generateMetadata } from './tibia-11-pvpe-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpeGuideKeywordPage />;
}
