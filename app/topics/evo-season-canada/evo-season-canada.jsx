import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-season-canada');
}

export default function EvoSeasonCanadaKeywordPage() {
  return <StaticKeywordPage slug="evo-season-canada" />;
}
