import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-season-usa');
}

export default function EvoSeasonUsaKeywordPage() {
  return <StaticKeywordPage slug="evo-season-usa" />;
}
