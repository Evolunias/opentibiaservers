import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-1-low-exp-server');
}

export default function Canob71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-1-low-exp-server" />;
}
