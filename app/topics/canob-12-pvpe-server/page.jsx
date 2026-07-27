import Canob12PvpeServerKeywordPage, { generateMetadata } from './canob-12-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob12PvpeServerKeywordPage />;
}
