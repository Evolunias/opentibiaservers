import Tibiascape71PvpServerKeywordPage, { generateMetadata } from './tibiascape-7-1-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape71PvpServerKeywordPage />;
}
