import Tibiascape14PvpServerKeywordPage, { generateMetadata } from './tibiascape-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape14PvpServerKeywordPage />;
}
