import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-6-high-exp-server');
}

export default function Canob76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-6-high-exp-server" />;
}
