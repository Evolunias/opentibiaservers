import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-guide-usa');
}

export default function PvpGuideUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-guide-usa" />;
}
