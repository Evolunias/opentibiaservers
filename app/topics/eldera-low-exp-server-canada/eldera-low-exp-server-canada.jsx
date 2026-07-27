import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-low-exp-server-canada');
}

export default function ElderaLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="eldera-low-exp-server-canada" />;
}
