import Tibiascape12NonPvpServerKeywordPage, { generateMetadata } from './tibiascape-12-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape12NonPvpServerKeywordPage />;
}
