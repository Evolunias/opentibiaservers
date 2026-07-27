import Tibiascape11PvpServerKeywordPage, { generateMetadata } from './tibiascape-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape11PvpServerKeywordPage />;
}
