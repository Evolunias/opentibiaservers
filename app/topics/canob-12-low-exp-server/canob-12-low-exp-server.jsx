import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-12-low-exp-server');
}

export default function Canob12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-12-low-exp-server" />;
}
