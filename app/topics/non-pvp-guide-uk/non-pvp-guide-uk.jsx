import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-guide-uk');
}

export default function NonPvpGuideUkKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-guide-uk" />;
}
