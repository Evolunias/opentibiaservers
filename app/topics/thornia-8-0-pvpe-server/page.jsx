import Thornia80PvpeServerKeywordPage, { generateMetadata } from './thornia-8-0-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia80PvpeServerKeywordPage />;
}
