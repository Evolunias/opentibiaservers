import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-no-reset-server-poland');
}

export default function CanobNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="canob-no-reset-server-poland" />;
}
