import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-guide-canada');
}

export default function PvpGuideCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-guide-canada" />;
}
