import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-europe-servers');
}

export default function MiracleEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-europe-servers" />;
}
