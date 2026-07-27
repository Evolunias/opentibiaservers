import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-9-6-low-exp-server');
}

export default function Canob96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-9-6-low-exp-server" />;
}
