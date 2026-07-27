import Tibia80PvpeStatusKeywordPage, { generateMetadata } from './tibia-8-0-pvpe-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpeStatusKeywordPage />;
}
