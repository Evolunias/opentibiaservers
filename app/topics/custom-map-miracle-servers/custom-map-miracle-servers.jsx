import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-miracle-servers');
}

export default function CustomMapMiracleServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-miracle-servers" />;
}
