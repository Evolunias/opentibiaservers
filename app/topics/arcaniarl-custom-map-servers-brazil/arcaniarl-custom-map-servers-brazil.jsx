import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-servers-brazil');
}

export default function ArcaniarlCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-servers-brazil" />;
}
