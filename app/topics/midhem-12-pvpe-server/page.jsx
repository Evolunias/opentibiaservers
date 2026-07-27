import Midhem12PvpeServerKeywordPage, { generateMetadata } from './midhem-12-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem12PvpeServerKeywordPage />;
}
