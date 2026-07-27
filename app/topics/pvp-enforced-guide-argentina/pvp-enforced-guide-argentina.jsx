import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-guide-argentina');
}

export default function PvpEnforcedGuideArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-guide-argentina" />;
}
