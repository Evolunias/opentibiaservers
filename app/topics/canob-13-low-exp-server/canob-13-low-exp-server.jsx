import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-13-low-exp-server');
}

export default function Canob13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-13-low-exp-server" />;
}
