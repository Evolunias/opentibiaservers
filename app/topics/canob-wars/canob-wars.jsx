import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-wars');
}

export default function CanobWarsKeywordPage() {
  return <StaticKeywordPage slug="canob-wars" />;
}
