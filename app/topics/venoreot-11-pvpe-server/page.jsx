import Venoreot11PvpeServerKeywordPage, { generateMetadata } from './venoreot-11-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot11PvpeServerKeywordPage />;
}
