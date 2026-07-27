import Tibiascape11NonPvpServerKeywordPage, { generateMetadata } from './tibiascape-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape11NonPvpServerKeywordPage />;
}
