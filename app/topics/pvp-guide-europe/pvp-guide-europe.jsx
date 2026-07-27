import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-guide-europe');
}

export default function PvpGuideEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-guide-europe" />;
}
