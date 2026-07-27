import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-guide-europe');
}

export default function PvpEnforcedGuideEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-guide-europe" />;
}
