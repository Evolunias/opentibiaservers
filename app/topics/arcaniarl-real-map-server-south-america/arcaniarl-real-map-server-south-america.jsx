import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-real-map-server-south-america');
}

export default function ArcaniarlRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-real-map-server-south-america" />;
}
