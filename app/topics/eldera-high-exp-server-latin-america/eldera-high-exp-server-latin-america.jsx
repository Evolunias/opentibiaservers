import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-high-exp-server-latin-america');
}

export default function ElderaHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-high-exp-server-latin-america" />;
}
