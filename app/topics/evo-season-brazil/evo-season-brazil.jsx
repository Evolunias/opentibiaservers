import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-season-brazil');
}

export default function EvoSeasonBrazilKeywordPage() {
  return <StaticKeywordPage slug="evo-season-brazil" />;
}
