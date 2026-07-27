import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-low-exp-server-canada');
}

export default function CanobLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="canob-low-exp-server-canada" />;
}
