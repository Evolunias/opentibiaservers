import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-season-uk');
}

export default function EvoSeasonUkKeywordPage() {
  return <StaticKeywordPage slug="evo-season-uk" />;
}
