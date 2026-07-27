import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-guide-north-america');
}

export default function PvpGuideNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-guide-north-america" />;
}
