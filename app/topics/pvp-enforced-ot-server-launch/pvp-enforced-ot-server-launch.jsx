import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-launch');
}

export default function PvpEnforcedOtServerLaunchKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-launch" />;
}
