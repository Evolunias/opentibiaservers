import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-server-france');
}

export default function ArcaniarlCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-server-france" />;
}
