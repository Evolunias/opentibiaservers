import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-guide-poland');
}

export default function PvpGuidePolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-guide-poland" />;
}
