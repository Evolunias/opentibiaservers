import Tibiascape15PvpServerKeywordPage, { generateMetadata } from './tibiascape-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape15PvpServerKeywordPage />;
}
