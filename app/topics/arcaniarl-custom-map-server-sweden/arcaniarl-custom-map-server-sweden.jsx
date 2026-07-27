import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-server-sweden');
}

export default function ArcaniarlCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-server-sweden" />;
}
