import PvpEnforcedArcaniarlServerKeywordPage, { generateMetadata } from './pvp-enforced-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedArcaniarlServerKeywordPage />;
}
