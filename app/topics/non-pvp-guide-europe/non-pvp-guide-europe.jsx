import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-guide-europe');
}

export default function NonPvpGuideEuropeKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-guide-europe" />;
}
