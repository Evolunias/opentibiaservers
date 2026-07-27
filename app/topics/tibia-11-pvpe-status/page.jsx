import Tibia11PvpeStatusKeywordPage, { generateMetadata } from './tibia-11-pvpe-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpeStatusKeywordPage />;
}
