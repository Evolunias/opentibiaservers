import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-ot-server-canada');
}

export default function HighExpOtServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-ot-server-canada" />;
}
