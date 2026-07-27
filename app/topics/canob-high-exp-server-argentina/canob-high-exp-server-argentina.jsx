import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-high-exp-server-argentina');
}

export default function CanobHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="canob-high-exp-server-argentina" />;
}
