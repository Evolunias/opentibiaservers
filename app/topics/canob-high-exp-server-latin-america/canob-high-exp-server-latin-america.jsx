import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-high-exp-server-latin-america');
}

export default function CanobHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-high-exp-server-latin-america" />;
}
