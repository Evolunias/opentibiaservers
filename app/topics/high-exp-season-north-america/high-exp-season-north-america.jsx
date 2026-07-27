import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-season-north-america');
}

export default function HighExpSeasonNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-season-north-america" />;
}
