import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-guide-argentina');
}

export default function PvpGuideArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-guide-argentina" />;
}
