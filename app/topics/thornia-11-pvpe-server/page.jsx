import Thornia11PvpeServerKeywordPage, { generateMetadata } from './thornia-11-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11PvpeServerKeywordPage />;
}
