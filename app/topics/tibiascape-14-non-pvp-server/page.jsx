import Tibiascape14NonPvpServerKeywordPage, { generateMetadata } from './tibiascape-14-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape14NonPvpServerKeywordPage />;
}
