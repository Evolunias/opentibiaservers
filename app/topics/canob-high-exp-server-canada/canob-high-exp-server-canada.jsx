import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-high-exp-server-canada');
}

export default function CanobHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="canob-high-exp-server-canada" />;
}
