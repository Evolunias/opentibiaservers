import Tibia76PvpeStatusKeywordPage, { generateMetadata } from './tibia-7-6-pvpe-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpeStatusKeywordPage />;
}
