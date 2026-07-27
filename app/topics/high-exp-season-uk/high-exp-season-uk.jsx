import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-season-uk');
}

export default function HighExpSeasonUkKeywordPage() {
  return <StaticKeywordPage slug="high-exp-season-uk" />;
}
