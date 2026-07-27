import Shadowcores11PvpeServerKeywordPage, { generateMetadata } from './shadowcores-11-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores11PvpeServerKeywordPage />;
}
