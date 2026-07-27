import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-season-france');
}

export default function EvoSeasonFranceKeywordPage() {
  return <StaticKeywordPage slug="evo-season-france" />;
}
