import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-high-exp-server-poland');
}

export default function CanobHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="canob-high-exp-server-poland" />;
}
