import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-servers-usa');
}

export default function ArcaniarlCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-servers-usa" />;
}
