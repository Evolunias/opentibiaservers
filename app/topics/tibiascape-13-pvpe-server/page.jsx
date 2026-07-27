import Tibiascape13PvpeServerKeywordPage, { generateMetadata } from './tibiascape-13-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape13PvpeServerKeywordPage />;
}
