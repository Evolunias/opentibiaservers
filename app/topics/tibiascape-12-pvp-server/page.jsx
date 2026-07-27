import Tibiascape12PvpServerKeywordPage, { generateMetadata } from './tibiascape-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape12PvpServerKeywordPage />;
}
