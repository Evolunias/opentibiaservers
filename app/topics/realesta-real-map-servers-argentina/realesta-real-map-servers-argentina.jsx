import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-servers-argentina');
}

export default function RealestaRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-servers-argentina" />;
}
