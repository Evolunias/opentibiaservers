import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-high-exp-server-north-america');
}

export default function CanobHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-high-exp-server-north-america" />;
}
