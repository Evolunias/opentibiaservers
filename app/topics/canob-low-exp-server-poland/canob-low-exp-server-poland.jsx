import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-low-exp-server-poland');
}

export default function CanobLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="canob-low-exp-server-poland" />;
}
