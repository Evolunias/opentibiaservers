import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-luminera-servers');
}

export default function CustomMapLumineraServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-luminera-servers" />;
}
