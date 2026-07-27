import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-14-real-map-servers');
}

export default function Medivia14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-14-real-map-servers" />;
}
