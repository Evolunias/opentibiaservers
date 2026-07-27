import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-4-high-exp-server');
}

export default function Canob84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-4-high-exp-server" />;
}
