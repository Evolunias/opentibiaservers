import Tibiascape13PvpServerKeywordPage, { generateMetadata } from './tibiascape-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape13PvpServerKeywordPage />;
}
