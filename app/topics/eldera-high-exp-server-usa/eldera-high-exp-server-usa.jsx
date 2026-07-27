import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-high-exp-server-usa');
}

export default function ElderaHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-high-exp-server-usa" />;
}
