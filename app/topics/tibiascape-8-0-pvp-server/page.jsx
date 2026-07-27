import Tibiascape80PvpServerKeywordPage, { generateMetadata } from './tibiascape-8-0-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape80PvpServerKeywordPage />;
}
