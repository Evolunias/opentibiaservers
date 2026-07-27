import PvpEnforcedTibiascapeServerKeywordPage, { generateMetadata } from './pvp-enforced-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedTibiascapeServerKeywordPage />;
}
