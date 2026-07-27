import Tibia1098PvpeStatusKeywordPage, { generateMetadata } from './tibia-10-98-pvpe-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpeStatusKeywordPage />;
}
