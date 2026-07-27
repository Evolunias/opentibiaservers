import Tibiascape96PvpServerKeywordPage, { generateMetadata } from './tibiascape-9-6-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape96PvpServerKeywordPage />;
}
