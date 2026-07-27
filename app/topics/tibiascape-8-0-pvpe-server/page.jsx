import Tibiascape80PvpeServerKeywordPage, { generateMetadata } from './tibiascape-8-0-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape80PvpeServerKeywordPage />;
}
