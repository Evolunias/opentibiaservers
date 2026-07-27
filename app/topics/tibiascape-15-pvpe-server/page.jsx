import Tibiascape15PvpeServerKeywordPage, { generateMetadata } from './tibiascape-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape15PvpeServerKeywordPage />;
}
