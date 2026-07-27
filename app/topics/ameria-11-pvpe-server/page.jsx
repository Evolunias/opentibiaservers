import Ameria11PvpeServerKeywordPage, { generateMetadata } from './ameria-11-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria11PvpeServerKeywordPage />;
}
