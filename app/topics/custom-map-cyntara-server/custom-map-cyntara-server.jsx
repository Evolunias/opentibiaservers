import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-cyntara-server');
}

export default function CustomMapCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-cyntara-server" />;
}
