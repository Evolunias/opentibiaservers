import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-no-reset-server-brazil');
}

export default function CanobNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-no-reset-server-brazil" />;
}
