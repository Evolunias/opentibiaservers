import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-high-exp');
}

export default function CanobHighExpKeywordPage() {
  return <StaticKeywordPage slug="canob-high-exp" />;
}
