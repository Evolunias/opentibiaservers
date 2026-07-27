import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-high-exp-server-south-america');
}

export default function ElderaHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-high-exp-server-south-america" />;
}
