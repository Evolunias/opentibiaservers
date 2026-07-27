import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-real-map-server-north-america');
}

export default function ArcaniarlRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-real-map-server-north-america" />;
}
