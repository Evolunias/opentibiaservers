import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-4-high-exp-server');
}

export default function Canob74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-4-high-exp-server" />;
}
