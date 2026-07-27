import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-canada-server');
}

export default function MiracleCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-canada-server" />;
}
