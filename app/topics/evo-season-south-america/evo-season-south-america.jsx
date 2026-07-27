import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-season-south-america');
}

export default function EvoSeasonSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-season-south-america" />;
}
