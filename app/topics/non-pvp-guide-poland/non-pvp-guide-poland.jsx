import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-guide-poland');
}

export default function NonPvpGuidePolandKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-guide-poland" />;
}
