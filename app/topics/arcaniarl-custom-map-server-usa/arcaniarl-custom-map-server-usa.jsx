import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-server-usa');
}

export default function ArcaniarlCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-server-usa" />;
}
