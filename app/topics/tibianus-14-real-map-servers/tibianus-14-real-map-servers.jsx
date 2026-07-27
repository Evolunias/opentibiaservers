import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-14-real-map-servers');
}

export default function Tibianus14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-14-real-map-servers" />;
}
