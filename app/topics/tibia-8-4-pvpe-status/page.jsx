import Tibia84PvpeStatusKeywordPage, { generateMetadata } from './tibia-8-4-pvpe-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpeStatusKeywordPage />;
}
