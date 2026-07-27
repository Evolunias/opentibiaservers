import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-guide-usa');
}

export default function NonPvpGuideUsaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-guide-usa" />;
}
