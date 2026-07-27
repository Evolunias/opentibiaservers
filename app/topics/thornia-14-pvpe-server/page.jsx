import Thornia14PvpeServerKeywordPage, { generateMetadata } from './thornia-14-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia14PvpeServerKeywordPage />;
}
