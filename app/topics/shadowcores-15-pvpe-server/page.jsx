import Shadowcores15PvpeServerKeywordPage, { generateMetadata } from './shadowcores-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores15PvpeServerKeywordPage />;
}
