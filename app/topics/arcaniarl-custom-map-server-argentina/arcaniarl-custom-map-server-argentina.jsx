import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-server-argentina');
}

export default function ArcaniarlCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-server-argentina" />;
}
