import Midhem13PvpeServerKeywordPage, { generateMetadata } from './midhem-13-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem13PvpeServerKeywordPage />;
}
