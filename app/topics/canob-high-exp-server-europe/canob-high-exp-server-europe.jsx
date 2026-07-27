import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-high-exp-server-europe');
}

export default function CanobHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="canob-high-exp-server-europe" />;
}
