import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-germany-servers');
}

export default function MiracleGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-germany-servers" />;
}
