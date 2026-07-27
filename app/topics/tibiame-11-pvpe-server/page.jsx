import Tibiame11PvpeServerKeywordPage, { generateMetadata } from './tibiame-11-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame11PvpeServerKeywordPage />;
}
