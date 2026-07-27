import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-xanteria-servers');
}

export default function CustomMapXanteriaServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-xanteria-servers" />;
}
