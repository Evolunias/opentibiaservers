import Tibiascape80NonPvpServerKeywordPage, { generateMetadata } from './tibiascape-8-0-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape80NonPvpServerKeywordPage />;
}
