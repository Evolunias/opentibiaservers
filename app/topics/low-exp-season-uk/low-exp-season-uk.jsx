import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-season-uk');
}

export default function LowExpSeasonUkKeywordPage() {
  return <StaticKeywordPage slug="low-exp-season-uk" />;
}
