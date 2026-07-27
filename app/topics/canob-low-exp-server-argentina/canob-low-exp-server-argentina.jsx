import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-low-exp-server-argentina');
}

export default function CanobLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="canob-low-exp-server-argentina" />;
}
