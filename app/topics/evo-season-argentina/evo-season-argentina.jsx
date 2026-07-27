import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-season-argentina');
}

export default function EvoSeasonArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evo-season-argentina" />;
}
