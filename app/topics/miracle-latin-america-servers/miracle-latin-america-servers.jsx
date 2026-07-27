import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-latin-america-servers');
}

export default function MiracleLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-latin-america-servers" />;
}
