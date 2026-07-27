import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-otmadness-server');
}

export default function PvpEnforcedOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-otmadness-server" />;
}
