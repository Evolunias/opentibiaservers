import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-high-exp-server-canada');
}

export default function RealestaHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realesta-high-exp-server-canada" />;
}
