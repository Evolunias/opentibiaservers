import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-guide-usa');
}

export default function PvpEnforcedGuideUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-guide-usa" />;
}
