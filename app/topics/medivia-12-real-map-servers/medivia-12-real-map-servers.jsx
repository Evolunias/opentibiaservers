import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-real-map-servers');
}

export default function Medivia12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-real-map-servers" />;
}
