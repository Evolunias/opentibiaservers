import Midhem96PvpeServerKeywordPage, { generateMetadata } from './midhem-9-6-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem96PvpeServerKeywordPage />;
}
