import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-high-exp-server-argentina');
}

export default function ElderaHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eldera-high-exp-server-argentina" />;
}
