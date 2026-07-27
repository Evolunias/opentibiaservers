import Shadowcores13PvpeServerKeywordPage, { generateMetadata } from './shadowcores-13-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores13PvpeServerKeywordPage />;
}
