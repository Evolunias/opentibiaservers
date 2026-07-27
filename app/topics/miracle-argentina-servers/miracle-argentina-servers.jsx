import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-argentina-servers');
}

export default function MiracleArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-argentina-servers" />;
}
