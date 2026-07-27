import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-latin-america-server');
}

export default function MiracleLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-latin-america-server" />;
}
