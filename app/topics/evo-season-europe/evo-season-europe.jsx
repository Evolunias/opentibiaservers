import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-season-europe');
}

export default function EvoSeasonEuropeKeywordPage() {
  return <StaticKeywordPage slug="evo-season-europe" />;
}
