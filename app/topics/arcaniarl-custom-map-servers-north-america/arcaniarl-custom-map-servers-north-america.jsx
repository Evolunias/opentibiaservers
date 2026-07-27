import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-servers-north-america');
}

export default function ArcaniarlCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-servers-north-america" />;
}
