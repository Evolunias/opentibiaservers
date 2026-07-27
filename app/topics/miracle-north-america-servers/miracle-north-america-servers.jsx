import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-north-america-servers');
}

export default function MiracleNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-north-america-servers" />;
}
