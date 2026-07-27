import Tibia100PvpeStatusKeywordPage, { generateMetadata } from './tibia-10-0-pvpe-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpeStatusKeywordPage />;
}
