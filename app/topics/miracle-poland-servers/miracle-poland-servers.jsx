import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-poland-servers');
}

export default function MiraclePolandServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-poland-servers" />;
}
