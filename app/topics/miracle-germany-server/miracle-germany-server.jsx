import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-germany-server');
}

export default function MiracleGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-germany-server" />;
}
