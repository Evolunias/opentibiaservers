import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-9-6-high-exp-server');
}

export default function Canob96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-9-6-high-exp-server" />;
}
