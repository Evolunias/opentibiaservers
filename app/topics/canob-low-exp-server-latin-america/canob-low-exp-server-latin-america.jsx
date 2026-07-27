import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-low-exp-server-latin-america');
}

export default function CanobLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-low-exp-server-latin-america" />;
}
