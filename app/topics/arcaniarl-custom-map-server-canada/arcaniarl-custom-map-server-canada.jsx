import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-server-canada');
}

export default function ArcaniarlCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-server-canada" />;
}
