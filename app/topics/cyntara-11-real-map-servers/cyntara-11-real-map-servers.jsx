import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-11-real-map-servers');
}

export default function Cyntara11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-11-real-map-servers" />;
}
