import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-server-south-america');
}

export default function ArcaniarlCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-server-south-america" />;
}
