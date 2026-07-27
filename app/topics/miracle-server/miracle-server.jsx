import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-server');
}

export default function MiracleServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-server" />;
}
