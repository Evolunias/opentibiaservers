import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-14-high-exp-server');
}

export default function Canob14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-14-high-exp-server" />;
}
