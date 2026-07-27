import Tibia12PvpeStatusKeywordPage, { generateMetadata } from './tibia-12-pvpe-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpeStatusKeywordPage />;
}
