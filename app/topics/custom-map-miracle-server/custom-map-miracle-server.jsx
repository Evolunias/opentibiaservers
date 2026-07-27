import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-miracle-server');
}

export default function CustomMapMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-miracle-server" />;
}
