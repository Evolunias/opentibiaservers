import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-eternal-odyssey-server');
}

export default function PvpEnforcedEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-eternal-odyssey-server" />;
}
