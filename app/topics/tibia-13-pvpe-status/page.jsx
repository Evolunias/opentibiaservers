import Tibia13PvpeStatusKeywordPage, { generateMetadata } from './tibia-13-pvpe-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpeStatusKeywordPage />;
}
