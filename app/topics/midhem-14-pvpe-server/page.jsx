import Midhem14PvpeServerKeywordPage, { generateMetadata } from './midhem-14-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem14PvpeServerKeywordPage />;
}
