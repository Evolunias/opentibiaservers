import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-no-reset-server-usa');
}

export default function CanobNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-no-reset-server-usa" />;
}
