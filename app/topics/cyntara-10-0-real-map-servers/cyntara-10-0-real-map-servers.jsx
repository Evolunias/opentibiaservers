import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-0-real-map-servers');
}

export default function Cyntara100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-0-real-map-servers" />;
}
