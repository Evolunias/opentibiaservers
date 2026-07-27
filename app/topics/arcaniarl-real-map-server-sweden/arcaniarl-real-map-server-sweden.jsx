import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-real-map-server-sweden');
}

export default function ArcaniarlRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-real-map-server-sweden" />;
}
