import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-north-america-server');
}

export default function MiracleNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-north-america-server" />;
}
