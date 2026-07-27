import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-low-exp-server-brazil');
}

export default function CanobLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-low-exp-server-brazil" />;
}
