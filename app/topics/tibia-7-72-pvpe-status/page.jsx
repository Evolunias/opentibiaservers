import Tibia772PvpeStatusKeywordPage, { generateMetadata } from './tibia-7-72-pvpe-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772PvpeStatusKeywordPage />;
}
