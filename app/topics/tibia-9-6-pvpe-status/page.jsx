import Tibia96PvpeStatusKeywordPage, { generateMetadata } from './tibia-9-6-pvpe-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpeStatusKeywordPage />;
}
