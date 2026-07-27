import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-1-real-map-servers');
}

export default function Cyntara81RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-1-real-map-servers" />;
}
