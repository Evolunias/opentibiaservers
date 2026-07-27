import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-canada-servers');
}

export default function MiracleCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-canada-servers" />;
}
