import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-season-europe');
}

export default function HighExpSeasonEuropeKeywordPage() {
  return <StaticKeywordPage slug="high-exp-season-europe" />;
}
