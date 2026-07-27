import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-high-exp');
}

export default function ElderaHighExpKeywordPage() {
  return <StaticKeywordPage slug="eldera-high-exp" />;
}
