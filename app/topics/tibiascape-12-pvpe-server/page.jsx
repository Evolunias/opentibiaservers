import Tibiascape12PvpeServerKeywordPage, { generateMetadata } from './tibiascape-12-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape12PvpeServerKeywordPage />;
}
