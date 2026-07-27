import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-servers-argentina');
}

export default function RealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="real-map-servers-argentina" />;
}
