import Midhem81PvpeServerKeywordPage, { generateMetadata } from './midhem-8-1-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem81PvpeServerKeywordPage />;
}
