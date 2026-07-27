import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-high-exp-server-canada');
}

export default function OlderaHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oldera-high-exp-server-canada" />;
}
