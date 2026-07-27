import Tibiascape81PvpServerKeywordPage, { generateMetadata } from './tibiascape-8-1-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape81PvpServerKeywordPage />;
}
