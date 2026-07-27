import Tibia80PvpeGuideKeywordPage, { generateMetadata } from './tibia-8-0-pvpe-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpeGuideKeywordPage />;
}
