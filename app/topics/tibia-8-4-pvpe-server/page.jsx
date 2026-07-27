import Tibia84PvpeServerKeywordPage, { generateMetadata } from './tibia-8-4-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpeServerKeywordPage />;
}
