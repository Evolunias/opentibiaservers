import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-high-exp-server-mexico');
}

export default function CanobHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="canob-high-exp-server-mexico" />;
}
