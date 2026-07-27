import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-canada');
}

export default function HighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-canada" />;
}
