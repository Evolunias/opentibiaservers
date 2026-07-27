import Tibiascape11PvpeServerKeywordPage, { generateMetadata } from './tibiascape-11-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape11PvpeServerKeywordPage />;
}
