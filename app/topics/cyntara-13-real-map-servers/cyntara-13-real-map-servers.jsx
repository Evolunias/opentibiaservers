import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-13-real-map-servers');
}

export default function Cyntara13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-13-real-map-servers" />;
}
