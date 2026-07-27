import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-real-map-servers-argentina');
}

export default function ArcaniarlRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-real-map-servers-argentina" />;
}
