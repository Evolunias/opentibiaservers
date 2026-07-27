import Thornia13PvpeServerKeywordPage, { generateMetadata } from './thornia-13-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia13PvpeServerKeywordPage />;
}
