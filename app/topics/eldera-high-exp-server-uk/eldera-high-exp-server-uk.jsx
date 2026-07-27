import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-high-exp-server-uk');
}

export default function ElderaHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="eldera-high-exp-server-uk" />;
}
