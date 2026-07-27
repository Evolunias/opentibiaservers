import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-high-exp-server-brazil');
}

export default function ElderaHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-high-exp-server-brazil" />;
}
