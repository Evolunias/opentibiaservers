import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-1-real-map-servers');
}

export default function Medivia71RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-1-real-map-servers" />;
}
