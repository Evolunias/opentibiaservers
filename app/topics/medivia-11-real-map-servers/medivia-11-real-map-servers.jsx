import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-11-real-map-servers');
}

export default function Medivia11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-11-real-map-servers" />;
}
