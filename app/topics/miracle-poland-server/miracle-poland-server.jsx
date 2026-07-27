import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-poland-server');
}

export default function MiraclePolandServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-poland-server" />;
}
