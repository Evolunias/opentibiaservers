import Canob13PvpeServerKeywordPage, { generateMetadata } from './canob-13-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob13PvpeServerKeywordPage />;
}
