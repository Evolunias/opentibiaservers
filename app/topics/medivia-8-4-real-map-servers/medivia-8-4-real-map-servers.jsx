import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-4-real-map-servers');
}

export default function Medivia84RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-4-real-map-servers" />;
}
