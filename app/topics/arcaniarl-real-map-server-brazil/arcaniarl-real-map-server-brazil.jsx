import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-real-map-server-brazil');
}

export default function ArcaniarlRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-real-map-server-brazil" />;
}
