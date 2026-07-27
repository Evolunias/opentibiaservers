import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-europe-server');
}

export default function MiracleEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-europe-server" />;
}
