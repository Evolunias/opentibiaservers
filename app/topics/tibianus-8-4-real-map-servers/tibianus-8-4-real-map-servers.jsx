import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-4-real-map-servers');
}

export default function Tibianus84RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-4-real-map-servers" />;
}
