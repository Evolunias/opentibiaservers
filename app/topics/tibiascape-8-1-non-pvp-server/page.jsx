import Tibiascape81NonPvpServerKeywordPage, { generateMetadata } from './tibiascape-8-1-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape81NonPvpServerKeywordPage />;
}
