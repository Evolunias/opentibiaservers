import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-13-real-map-servers');
}

export default function Realesta13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-13-real-map-servers" />;
}
