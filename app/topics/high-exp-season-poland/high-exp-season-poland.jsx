import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-season-poland');
}

export default function HighExpSeasonPolandKeywordPage() {
  return <StaticKeywordPage slug="high-exp-season-poland" />;
}
