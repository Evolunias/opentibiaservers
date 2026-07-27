import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-real-map-servers-usa');
}

export default function ArcaniarlRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-real-map-servers-usa" />;
}
