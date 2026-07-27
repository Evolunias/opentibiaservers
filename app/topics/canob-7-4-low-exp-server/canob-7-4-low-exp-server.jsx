import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-4-low-exp-server');
}

export default function Canob74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-4-low-exp-server" />;
}
