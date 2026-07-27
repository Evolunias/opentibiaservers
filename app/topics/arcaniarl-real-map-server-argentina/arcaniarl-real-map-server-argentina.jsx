import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-real-map-server-argentina');
}

export default function ArcaniarlRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-real-map-server-argentina" />;
}
