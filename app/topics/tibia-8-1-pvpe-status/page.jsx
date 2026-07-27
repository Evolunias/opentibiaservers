import Tibia81PvpeStatusKeywordPage, { generateMetadata } from './tibia-8-1-pvpe-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpeStatusKeywordPage />;
}
