import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-season-argentina');
}

export default function HighExpSeasonArgentinaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-season-argentina" />;
}
