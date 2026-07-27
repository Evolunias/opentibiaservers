import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-ot-server-canada');
}

export default function LowExpOtServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-ot-server-canada" />;
}
