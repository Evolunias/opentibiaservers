import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-cyntara-servers');
}

export default function CustomMapCyntaraServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-cyntara-servers" />;
}
