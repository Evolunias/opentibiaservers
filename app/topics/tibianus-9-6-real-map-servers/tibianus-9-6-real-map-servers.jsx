import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-9-6-real-map-servers');
}

export default function Tibianus96RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-9-6-real-map-servers" />;
}
