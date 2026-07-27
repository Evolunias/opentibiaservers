import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-15-high-exp-server');
}

export default function Canob15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-15-high-exp-server" />;
}
