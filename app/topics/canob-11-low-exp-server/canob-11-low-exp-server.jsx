import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-11-low-exp-server');
}

export default function Canob11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-11-low-exp-server" />;
}
