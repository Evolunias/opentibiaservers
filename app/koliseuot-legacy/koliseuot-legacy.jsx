import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('koliseuot-legacy');
}

export default function KoliseuotLegacyPage() {
  return <StaticExactMatchPage slug="koliseuot-legacy" />;
}
