import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-guide-argentina');
}

export default function NonPvpGuideArgentinaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-guide-argentina" />;
}
