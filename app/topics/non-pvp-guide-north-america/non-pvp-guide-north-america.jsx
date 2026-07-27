import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-guide-north-america');
}

export default function NonPvpGuideNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-guide-north-america" />;
}
