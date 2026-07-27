import Tibia14PvpeStatusKeywordPage, { generateMetadata } from './tibia-14-pvpe-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpeStatusKeywordPage />;
}
