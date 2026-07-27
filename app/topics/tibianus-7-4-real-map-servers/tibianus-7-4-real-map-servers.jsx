import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-4-real-map-servers');
}

export default function Tibianus74RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-4-real-map-servers" />;
}
