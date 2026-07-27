import Tibia854PvpeStatusKeywordPage, { generateMetadata } from './tibia-8-54-pvpe-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854PvpeStatusKeywordPage />;
}
