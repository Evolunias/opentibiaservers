import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-argentina-server');
}

export default function MiracleArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-argentina-server" />;
}
