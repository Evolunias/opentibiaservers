import Midhem71PvpeServerKeywordPage, { generateMetadata } from './midhem-7-1-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem71PvpeServerKeywordPage />;
}
