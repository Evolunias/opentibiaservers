import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-0-real-map-servers');
}

export default function Medivia100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-0-real-map-servers" />;
}
