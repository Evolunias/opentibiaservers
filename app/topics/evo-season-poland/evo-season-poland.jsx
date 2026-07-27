import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-season-poland');
}

export default function EvoSeasonPolandKeywordPage() {
  return <StaticKeywordPage slug="evo-season-poland" />;
}
