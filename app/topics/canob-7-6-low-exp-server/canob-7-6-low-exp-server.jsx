import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-6-low-exp-server');
}

export default function Canob76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-6-low-exp-server" />;
}
