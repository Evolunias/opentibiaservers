import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-guide-uk');
}

export default function PvpGuideUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-guide-uk" />;
}
