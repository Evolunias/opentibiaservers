import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-season-canada');
}

export default function HighExpSeasonCanadaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-season-canada" />;
}
