import Thornia12PvpeServerKeywordPage, { generateMetadata } from './thornia-12-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia12PvpeServerKeywordPage />;
}
