import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-4-low-exp-server');
}

export default function Canob84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-4-low-exp-server" />;
}
