import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-season-mexico');
}

export default function EvoSeasonMexicoKeywordPage() {
  return <StaticKeywordPage slug="evo-season-mexico" />;
}
