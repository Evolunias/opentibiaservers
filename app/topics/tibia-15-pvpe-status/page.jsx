import Tibia15PvpeStatusKeywordPage, { generateMetadata } from './tibia-15-pvpe-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpeStatusKeywordPage />;
}
