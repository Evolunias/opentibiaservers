import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-xanteria-server');
}

export default function CustomMapXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-xanteria-server" />;
}
