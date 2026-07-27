import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-low-exp-server-germany');
}

export default function CanobLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="canob-low-exp-server-germany" />;
}
