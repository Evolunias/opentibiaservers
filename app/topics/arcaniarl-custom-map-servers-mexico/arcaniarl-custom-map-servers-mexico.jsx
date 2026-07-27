import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-servers-mexico');
}

export default function ArcaniarlCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-servers-mexico" />;
}
