import Canob11PvpeServerKeywordPage, { generateMetadata } from './canob-11-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob11PvpeServerKeywordPage />;
}
