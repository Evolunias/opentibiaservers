import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-luminera-server');
}

export default function CustomMapLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-luminera-server" />;
}
