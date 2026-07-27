import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-server-mexico');
}

export default function ArcaniarlCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-server-mexico" />;
}
