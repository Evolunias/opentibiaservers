import Midhem80PvpeServerKeywordPage, { generateMetadata } from './midhem-8-0-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem80PvpeServerKeywordPage />;
}
