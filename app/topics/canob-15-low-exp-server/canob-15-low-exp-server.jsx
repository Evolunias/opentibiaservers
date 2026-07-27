import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-15-low-exp-server');
}

export default function Canob15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-15-low-exp-server" />;
}
