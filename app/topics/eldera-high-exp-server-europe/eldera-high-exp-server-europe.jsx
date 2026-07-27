import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-high-exp-server-europe');
}

export default function ElderaHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-high-exp-server-europe" />;
}
