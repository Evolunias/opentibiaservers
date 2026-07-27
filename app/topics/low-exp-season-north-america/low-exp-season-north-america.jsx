import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-season-north-america');
}

export default function LowExpSeasonNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-season-north-america" />;
}
