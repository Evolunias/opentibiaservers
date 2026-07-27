import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-1-real-map-servers');
}

export default function Cyntara71RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-1-real-map-servers" />;
}
