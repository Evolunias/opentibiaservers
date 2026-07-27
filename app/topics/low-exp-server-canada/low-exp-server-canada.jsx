import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-canada');
}

export default function LowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-canada" />;
}
