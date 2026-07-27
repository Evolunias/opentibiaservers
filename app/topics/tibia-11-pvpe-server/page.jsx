import Tibia11PvpeServerKeywordPage, { generateMetadata } from './tibia-11-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpeServerKeywordPage />;
}
