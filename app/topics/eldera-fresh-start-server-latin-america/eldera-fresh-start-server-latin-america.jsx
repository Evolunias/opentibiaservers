import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-fresh-start-server-latin-america');
}

export default function ElderaFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-fresh-start-server-latin-america" />;
}
