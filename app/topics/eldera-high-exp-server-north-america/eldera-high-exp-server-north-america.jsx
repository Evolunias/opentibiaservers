import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-high-exp-server-north-america');
}

export default function ElderaHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-high-exp-server-north-america" />;
}
