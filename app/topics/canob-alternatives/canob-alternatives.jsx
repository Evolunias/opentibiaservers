import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-alternatives');
}

export default function CanobAlternativesKeywordPage() {
  return <StaticKeywordPage slug="canob-alternatives" />;
}
