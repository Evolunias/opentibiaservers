import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-servers-canada');
}

export default function ArcaniarlCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-servers-canada" />;
}
