import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-high-exp-server-usa');
}

export default function CanobHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-high-exp-server-usa" />;
}
