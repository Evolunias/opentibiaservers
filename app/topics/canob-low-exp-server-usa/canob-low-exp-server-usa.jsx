import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-low-exp-server-usa');
}

export default function CanobLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-low-exp-server-usa" />;
}
