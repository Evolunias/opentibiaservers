import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-high-exp-server-germany');
}

export default function ElderaHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eldera-high-exp-server-germany" />;
}
