import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-0-real-map-servers');
}

export default function Cyntara80RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-0-real-map-servers" />;
}
