import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-low-exp-server-europe');
}

export default function CanobLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="canob-low-exp-server-europe" />;
}
