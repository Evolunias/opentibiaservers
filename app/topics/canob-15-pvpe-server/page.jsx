import Canob15PvpeServerKeywordPage, { generateMetadata } from './canob-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob15PvpeServerKeywordPage />;
}
