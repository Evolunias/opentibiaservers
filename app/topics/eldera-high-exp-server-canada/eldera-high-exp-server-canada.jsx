import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-high-exp-server-canada');
}

export default function ElderaHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="eldera-high-exp-server-canada" />;
}
