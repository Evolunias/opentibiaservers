import Canob14PvpeServerKeywordPage, { generateMetadata } from './canob-14-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob14PvpeServerKeywordPage />;
}
