import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-no-reset-server-germany');
}

export default function CanobNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="canob-no-reset-server-germany" />;
}
