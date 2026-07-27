import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-season-usa');
}

export default function HighExpSeasonUsaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-season-usa" />;
}
