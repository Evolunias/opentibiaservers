import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-0-real-map-servers');
}

export default function Tibianus100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-0-real-map-servers" />;
}
