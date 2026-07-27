import Tibia74PvpeClientKeywordPage, { generateMetadata } from './tibia-7-4-pvpe-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PvpeClientKeywordPage />;
}
