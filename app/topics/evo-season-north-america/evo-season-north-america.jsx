import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-season-north-america');
}

export default function EvoSeasonNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-season-north-america" />;
}
