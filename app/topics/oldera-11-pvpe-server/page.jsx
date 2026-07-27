import Oldera11PvpeServerKeywordPage, { generateMetadata } from './oldera-11-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera11PvpeServerKeywordPage />;
}
