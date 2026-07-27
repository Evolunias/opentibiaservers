import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-high-exp-server-canada');
}

export default function RealeraHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realera-high-exp-server-canada" />;
}
