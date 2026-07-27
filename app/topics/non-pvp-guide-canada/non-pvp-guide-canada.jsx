import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-guide-canada');
}

export default function NonPvpGuideCanadaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-guide-canada" />;
}
