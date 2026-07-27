import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-server-north-america');
}

export default function ArcaniarlCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-server-north-america" />;
}
